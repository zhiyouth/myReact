import React, {useState, useEffect, useRef} from 'react';
import './index.less';

/*完美无缝轮播实现原理
  *每次setTimeout里面的函数触发的时候。先把下一张图片放到右边，然后一起轮播
  left: -931px 0 931px;
  */  

let timer;
function BannerContent() {
    const bannerImgs = [{}, {}, {}, {}, {}, {}];
    const [active, setActive] = useState(0);
    const [stopFlag, setStopFlag] = useState(0);
    const banner = useRef('banner');

    //轮播
    function showNext() {
        let nextActive = active + 1;
        if (active < bannerImgs.length -1) {
            nextActive = active + 1;
        } else {
            nextActive = 0
        }
        banner.current.children[active].style.transition = "none";
        banner.current.children[nextActive].style.transition = "none";
        banner.current.children[nextActive].style.left = "931px";
        setTimeout(() => {
            banner.current.children[nextActive].style.transition = "all .5s";
            banner.current.children[active].style.transition = "all .5s";
            banner.current.children[active].style.left = "-931px";
            banner.current.children[nextActive].style.left = "0px";
        }, 20)
        setActive(nextActive);
    }
    
    //停止轮播，清除定时器
    function stopTimer() {
        clearTimeout(timer);
    }

    //初始化设置定时器 并绑定鼠标事件
    useEffect(() => {
        banner.current.addEventListener('mouseenter', () => {
            stopTimer();
            setStopFlag(true)
        });
        banner.current.addEventListener('mouseleave', () => {
            setStopFlag(false)
        });
        return () => {
            banner.current.removeEventListener('mouseenter');
            banner.current.removeEventListener('mouseleave');
        }
    }, [false])
    
    // //初始化设置定时器
    useEffect(() => {
        if (!stopFlag) {
            timer = setTimeout(showNext, 3000);
        }
    }, [active, stopFlag])

    return (
        <React.Fragment>
            <div className="banner" ref={banner}>
                {
                    bannerImgs.map((item, index) => {
                        return (
                            <div key={`banner-item-${index}`} className={`banner-item item-${index}`}></div>
                        );
                    })
                }
            </div>
            <div className="mark-points">
                {
                    bannerImgs.map((item, index) => {
                        return (
                            <div key={`points-${index}`} className={`points-item points-${index} ${index === active ? 'active' : ''}`}></div>
                        );
                    })
                }
            </div>
        </React.Fragment>
    );
}

export default BannerContent;