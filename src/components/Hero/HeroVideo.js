import React from 'react';
import Video from './video.mp4';
import { HeroContainer, HeroContVideo, VideoCarp, HeroAnimation, SnowflakeOne, SnowflakeTwo, SnowflakeThree, HeroContent, HeroTitle } from './HeroVideo.elements';

const HeroVideo = () => {
    return (
        <HeroContainer>
            <HeroContVideo>
                <VideoCarp autoPlay loop muted src={Video} type='video/mp4' />
            </HeroContVideo>
            <HeroAnimation>
                <SnowflakeOne />
                <SnowflakeTwo />
                <SnowflakeThree />
            </HeroAnimation>
            <HeroContent>
                <HeroTitle>Зимові канікули в Карпатах</HeroTitle>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroVideo;
