"use client"
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
    type Container,
    IOptions,
    type ISourceOptions,
    MoveDirection,
    OutMode,
  } from "@tsparticles/engine";
  // import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
  // import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
  import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
  // import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
  
export default function TsParticles() {
    const [init, setInit] = useState(false);
  
    // this should be run only once per application lifetime
    useEffect(() => {
      initParticlesEngine(async (engine) => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadAll(engine);
        //await loadFull(engine);
        await loadSlim(engine);
        //await loadBasic(engine);
      }).then(() => {
        setInit(true);
      });
    }, []);
  
    const particlesLoaded = async (container?: Container): Promise<void> => {
      console.log(container);
    };
  
    const options: any = useMemo(
      () => ({
        "autoPlay": true,
        "background": {
          "color": {
            "value": ""
          },
          "image": "",
          "position": "",
          "repeat": "",
          "size": "",
          "opacity": 1
        },
        "backgroundMask": {
          "composite": "destination-out",
          "cover": {
            "color": {
              "value": "#fff"
            },
            "opacity": 1
          },
          "enable": false
        },
        "clear": true,
        "defaultThemes": {},
        "delay": 0,
        "fullScreen": {
          "enable": false,
          "zIndex": 0
        },
        "detectRetina": true,
        "duration": 0,
        "fpsLimit": 120,
        "interactivity": {
          "detectsOn": "window",
          "events": {
            "onClick": {
              "enable": false,
              "mode": "repulse"
            },
            "onDiv": {
              "selectors": [],
              "enable": false,
              "mode": [],
              "type": "circle"
            },
            "onHover": {
              "enable": true,
              "mode": "bubble",
              "parallax": {
                "enable": false,
                "force": 2,
                "smooth": 10
              }
            },
            "resize": {
              "delay": 0.5,
              "enable": true
            }
          },
          "modes": {
            "trail": {
              "delay": 1,
              "pauseOnStop": false,
              "quantity": 1
            },
            "attract": {
              "distance": 200,
              "duration": 0.4,
              "easing": "ease-out-quad",
              "factor": 1,
              "maxSpeed": 50,
              "speed": 1
            },
            "bounce": {
              "distance": 200
            },
            "bubble": {
              "distance": 400,
              "duration": 2,
              "mix": false,
              "opacity": 0.75,
              "size": 40,
              "divs": {
                "distance": 200,
                "duration": 0.4,
                "mix": false,
                "selectors": []
              }
            },
            "connect": {
              "distance": 80,
              "links": {
                "opacity": 0.5
              },
              "radius": 60
            },
            "grab": {
              "distance": 100,
              "links": {
                "blink": false,
                "consent": false,
                "opacity": 1
              }
            },
            "push": {
              "default": true,
              "groups": [],
              "quantity": 4
            },
            "remove": {
              "quantity": 2
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4,
              "factor": 100,
              "speed": 1,
              "maxSpeed": 50,
              "easing": "ease-out-quad",
              "divs": {
                "distance": 200,
                "duration": 0.4,
                "factor": 100,
                "speed": 1,
                "maxSpeed": 50,
                "easing": "ease-out-quad",
                "selectors": []
              }
            },
            "slow": {
              "factor": 5,
              "radius": 200
            },
            "light": {
              "area": {
                "gradient": {
                  "start": {
                    "value": "#ffffff"
                  },
                  "stop": {
                    "value": "#000000"
                  }
                },
                "radius": 1000
              },
              "shadow": {
                "color": {
                  "value": "#000000"
                },
                "length": 2000
              }
            }
          }
        },
        "manualParticles": [],
        "particles": {
          "bounce": {
            "horizontal": {
              "value": 1
            },
            "vertical": {
              "value": 1
            }
          },
          "collisions": {
            "absorb": {
              "speed": 2
            },
            "bounce": {
              "horizontal": {
                "value": 1
              },
              "vertical": {
                "value": 1
              }
            },
            "enable": false,
            "maxSpeed": 1,
            "mode": "bounce",
            "overlap": {
              "enable": true,
              "retries": 0
            }
          },
          "color": {
            "value": "#ffffff",
            "animation": {
              "h": {
                "count": 0,
                "enable": false,
                "speed": 1,
                "decay": 0,
                "delay": 0,
                "sync": true,
                "offset": 0
              },
              "s": {
                "count": 0,
                "enable": false,
                "speed": 1,
                "decay": 0,
                "delay": 0,
                "sync": true,
                "offset": 0
              },
              "l": {
                "count": 0,
                "enable": false,
                "speed": 1,
                "decay": 0,
                "delay": 0,
                "sync": true,
                "offset": 0
              }
            }
          },
          "effect": {
            "close": true,
            "fill": true,
            "options": {},
            "type": []
          },
          "groups": {},
          "move": {
            "angle": {
              "offset": 0,
              "value": 90
            },
            "attract": {
              "distance": 200,
              "enable": false,
              "rotate": {
                "x": 300,
                "y": 300
              }
            },
            "center": {
              "x": 50,
              "y": 50,
              "mode": "percent",
              "radius": 0
            },
            "decay": 0,
            "distance": {},
            "direction": "none",
            "drift": 0,
            "enable": true,
            "gravity": {
              "acceleration": 0.81,
              "enable": false,
              "inverse": false,
              "maxSpeed": 0.5
            },
            "path": {
              "clamp": true,
              "delay": {
                "value": 0
              },
              "enable": false,
              "options": {}
            },
            "outModes": {
              "default": "out",
              "bottom": "out",
              "left": "out",
              "right": "out",
              "top": "out"
            },
            "random": true,
            "size": false,
            "speed": 0.8,
            "spin": {
              "acceleration": 1,
              "enable": false
            },
            "straight": false,
            "trail": {
              "enable": false,
              "length": 10,
              "fill": {}
            },
            "vibrate": false,
            "warp": false
          },
          "number": {
            "density": {
              "enable": true,
              "width": 1920,
              "height": 1080
            },
            "limit": {
              "mode": "delete",
              "value": 0
            },
            "value": 6
          },
          "opacity": {
            "value": 0.15,
            "animation": {
              "count": 0,
              "enable": false,
              "speed": 0.5,
              "decay": 0,
              "delay": 0,
              "sync": false,
              "mode": "auto",
              "startValue": "random",
              "destroy": "none"
            }
          },
          "reduceDuplicates": false,
          "shadow": {
            "blur": 0,
            "color": {
              "value": "#000"
            },
            "enable": false,
            "offset": {
              "x": 0,
              "y": 0
            }
          },
          "shape": {
            "close": true,
            "fill": true,
            "options": {
              "image": [
                // {
                //   "name": "apple"
                // },
                // {
                //   "name": "avocado"
                // },
                // {
                //   "name": "banana"
                // },
                // {
                //   "name": "berries"
                // },
                // {
                //   "name": "camera"
                // },
                {
                  "name": "headphones"
                },
                // {
                //   "name": "globe"
                // },
                {
                  "name": "gramophone"
                },
                // {
                //   "name": "cherry"
                // },
                // {
                //   "name": "grapes"
                // },
                // {
                //   "name": "lemon"
                // },
                // {
                //   "name": "orange"
                // },
                // {
                //   "name": "peach"
                // },
                // {
                //   "name": "pear"
                // },
                // {
                //   "name": "pepper"
                // },
                // {
                //   "name": "plum"
                // },
                // {
                //   "name": "star"
                // },
                // {
                //   "name": "strawberry"
                // },
                // {
                //   "name": "watermelon"
                // },
                // {
                //   "name": "watermelon_slice"
                // }
              ]
            },
            "type": "image"
          },
          "size": {
            "value": 50,
            "animation": {
              "count": 0,
              "enable": false,
              "speed": 1,
              "decay": 0,
              "delay": 0,
              "sync": false,
              "mode": "auto",
              "startValue": "random",
              "destroy": "none"
            }
          },
          "stroke": {
            "width": 0
          },
          "zIndex": {
            "value": 0,
            "opacityRate": 1,
            "sizeRate": 1,
            "velocityRate": 1
          },
          "destroy": {
            "bounds": {},
            "mode": "none",
            "split": {
              "count": 1,
              "factor": {
                "value": 3
              },
              "rate": {
                "value": {
                  "min": 4,
                  "max": 9
                }
              },
              "sizeOffset": true,
              "particles": {}
            }
          },
          "roll": {
            "darken": {
              "enable": false,
              "value": 0
            },
            "enable": false,
            "enlighten": {
              "enable": false,
              "value": 0
            },
            "mode": "vertical",
            "speed": 9
          },
          "tilt": {
            "value": 0,
            "animation": {
              "enable": false,
              "speed": 0,
              "decay": 0,
              "sync": false
            },
            "direction": "clockwise",
            "enable": false
          },
          "twinkle": {
            "lines": {
              "enable": false,
              "frequency": 0.05,
              "opacity": 1
            },
            "particles": {
              "enable": false,
              "frequency": 0.05,
              "opacity": 1
            }
          },
          "wobble": {
            "distance": 5,
            "enable": false,
            "speed": {
              "angle": 50,
              "move": 10
            }
          },
          "life": {
            "count": 0,
            "delay": {
              "value": 0,
              "sync": false
            },
            "duration": {
              "value": 0,
              "sync": false
            }
          },
          "rotate": {
            "value": {
              "min": 0,
              "max": 360
            },
            "animation": {
              "enable": true,
              "speed": 0.8,
              "decay": 0,
              "sync": false
            },
            "direction": "random",
            "path": false
          },
          "orbit": {
            "animation": {
              "count": 0,
              "enable": false,
              "speed": 1,
              "decay": 0,
              "delay": 0,
              "sync": false
            },
            "enable": false,
            "opacity": 1,
            "rotation": {
              "value": 45
            },
            "width": 1
          },
          "links": {
            "blink": false,
            "color": {
              "value": "#fff"
            },
            "consent": false,
            "distance": 100,
            "enable": false,
            "frequency": 1,
            "opacity": 1,
            "shadow": {
              "blur": 5,
              "color": {
                "value": "#000"
              },
              "enable": false
            },
            "triangles": {
              "enable": false,
              "frequency": 1
            },
            "width": 1,
            "warp": false
          },
          "repulse": {
            "value": 0,
            "enabled": false,
            "distance": 1,
            "duration": 1,
            "factor": 1,
            "speed": 1
          }
        },
        "pauseOnBlur": true,
        "pauseOnOutsideViewport": true,
        "responsive": [],
        "smooth": false,
        "style": {},
        "themes": [],
        "zLayers": 100,
        "name": "Images",
        "preload": [
        //   {
        //     "src": "https://particles.js.org/images/fruits/apple.png",
        //     "gif": false,
        //     "height": 32,
        //     "name": "apple",
        //     "width": 32
        //   },
        //   {
        //     "src": "https://particles.js.org/images/fruits/avocado.png",
        //     "gif": false,
        //     "height": 32,
        //     "name": "avocado",
        //     "width": 32
        //   },
        // {
        //     "src": "/png/vectors/mouse.png",
        //     "gif": false,
        //     "height": 32,
        //     "name": "banana",
        //     "width": 32
        // },
        // {
        //     "src": "/png/vectors/keyboard.png",
        //     "gif": false,
        //     "height": 32,
        //     "name": "berries",
        //     "width": 32
        // },
        // {
        //     "src": "/png/vectors/tik-tok.png",
        //     "gif": false,
        //     "height": 32,
        //     "name": "camera",
        //     "width": 32
        // },
        {
            "src": "/png/ster.png",
            "gif": false,
            "height": 32,
            "name": "headphones",
            "width": 32
        },
        // {
        //     "src": "/png/vectors/hand.png",
        //     "gif": false,
        //     "height": 4,
        //     "name": "globe",
        //     "width": 4
        // },
        {
            "src": "/png/star.png",
            "gif": false,
            "height": 32,
            "name": "gramophone",
            "width": 32
        },
        //   {
        //     "src": "https://particles.js.org/images/fruits/cherry.png",
        //     "gif": false,
        //     "height": 32,
        //     "name": "cherry",
        //     "width": 32
        //   },
        //   {
        //     "src": "https://particles.js.org/images/fruits/grapes.png",
        //     "gif": false,
        //     "height": 32,
        //     "name": "grapes",
        //     "width": 32
        //   },
        //   {
        //     "src": "https://particles.js.org/images/fruits/lemon.png",
        //     "gif": false,
        //     "height": 32,
        //     "name": "lemon",
        //     "width": 32
        //   },
        //   {
        //     "src": "https://particles.js.org/images/fruits/orange.png",
        //     "gif": false,
        //     "height": 32,
        //     "name": "orange",
        //     "width": 32
        //   },
        //   {
        //     "src": "https://particles.js.org/images/fruits/peach.png",
        //     "gif": false,
        //     "height": 32,
        //     "name": "peach",
        //     "width": 32
        //   },
        //   {
        //     "src": "https://particles.js.org/images/fruits/pear.png",
        //     "gif": false,
        //     "height": 32,
        //     "name": "pear",
        //     "width": 32
        //   },
        //   {
        //     "src": "https://particles.js.org/images/fruits/pepper.png",
        //     "gif": false,
        //     "height": 32,
        //     "name": "pepper",
        //     "width": 32
        //   },
        //   {
        //     "src": "https://particles.js.org/images/fruits/plum.png",
        //     "gif": false,
        //     "height": 32,
        //     "name": "plum",
        //     "width": 32
        //   },
        //   {
        //     "src": "https://particles.js.org/images/fruits/star.png",
        //     "gif": false,
        //     "height": 32,
        //     "name": "star",
        //     "width": 32
        //   },
        //   {
        //     "src": "https://particles.js.org/images/fruits/strawberry.png",
        //     "gif": false,
        //     "height": 32,
        //     "name": "strawberry",
        //     "width": 32
        //   },
        //   {
        //     "src": "https://particles.js.org/images/fruits/watermelon.png",
        //     "gif": false,
        //     "height": 32,
        //     "name": "watermelon",
        //     "width": 32
        //   },
        //   {
        //     "src": "https://particles.js.org/images/fruits/watermelon_slice.png",
        //     "gif": false,
        //     "height": 32,
        //     "name": "watermelon_slice",
        //     "width": 32
        //   }
        ],
        "motion": {
          "disable": false,
          "reduce": {
            "factor": 4,
            "value": true
          }
        }
      }),
      [],
    );
  
    if (init) {
      return (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className="absolute size-full"
        />
      );
    }
  
    return <></>;
};