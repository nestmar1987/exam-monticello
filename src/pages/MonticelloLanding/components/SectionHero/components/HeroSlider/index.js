import React, { Component } from 'react';
import Slider from 'react-slick';
import types from 'prop-types';

// Styles

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.scss';
import { FontIcon } from './../../../../../../components/FontIcon';

// ----------------

function NextArrow(props) {
    const { onClick } = props;
    return (
        <div className={'hero-next-arrow'} onClick={onClick}>
            <FontIcon icon="keyboard_arrow_right" />
        </div>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div className={'hero-prev-arrow'} onClick={onClick}>
            <FontIcon icon="keyboard_arrow_left" />
        </div>
    );
}

class HeroSlider extends Component {
    // Type of props

    static propTypes = {
        prop: types.string,
    };

    // Default value for props

    static defaultProps = {};

    render() {
        const { children, className } = this.props;

        const defaultSettings = {
            arrows: true,
            dots: true,
            infinite: true,
            speed: 200,
            fade: true,
            cssEase: 'ease',
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            focusOnSelect: true,
            dotsClass: 'hero-dots',
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            autoplay:true,
            autoplaySpeed: 2000,
        };

        return (
            <>
                <Slider
                    {...defaultSettings}
                    className={`slider-hero ${className}`}
                >
                    {children}
                </Slider>
            </>
        );
    }
}

export { HeroSlider };
