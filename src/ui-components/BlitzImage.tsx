import React from "react";

type BIprops = {
    maxWidth?: String;
    child: React.ReactNode; 
}

export default function BlitzImage (props: BIprops) {
    const { maxWidth, child } = props;


    return(
        <div className={`relative flex justify-center w-full ${maxWidth && `w-[${maxWidth}]`}`}>
            <div >
                <img className={`absolute -top-7 -left-7 -z-10 w-2/6 opacity-40`} src="/png/white_dots.png" alt={'dots'} />
            </div>
            <div className={``}>
                <img className="absolute -bottom-7 xl:-right-7 md:-right-5 -right-5 -z-10 w-2/6 opacity-40" src="/png/blue_dots.png" alt={'dots'} />
            </div>
            {child}
        </div>
    );
};