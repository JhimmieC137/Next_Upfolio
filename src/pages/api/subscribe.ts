// pages/api/subscribe.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MC_API_KEY,
  server: process.env.MC_SERVER_PREFIX,
});

const subscribe = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    console.log('Method not allowed')
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, firstName, lastName, date, phone } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {

    await mailchimp.lists.addListMember(process.env.MC_DEFAULT_AUDIENCE_ID as string, {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
        MMERGE6: phone,
        MMERGE7: date,
      }
    });

    
    return res.status(200).json({ message: 'Successfully subscribed!' });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || 'An error occurred' });
  }
};

export default subscribe;
