import React, { Component } from 'react';
import Slider from 'react-slick';
import types from 'prop-types';
import { FontIcon } from '../FontIcon';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


// Styles

import './styles.scss';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className={'news-next-arrow'} onClick={onClick}>
            <FontIcon icon="keyboard_arrow_right" />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className={'news-prev-arrow'} onClick={onClick}>
            <FontIcon icon="keyboard_arrow_left" />
        </div>
    );
}

// ----------------

class CustomSlider extends Component {
    // Type of props

    static propTypes = {
        prop: types.string,
    };

    // Default value for props

    static defaultProps = {};

    render() {
        const { children, className } = this.props;

        const defaultSettings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            dotsClass: 'news-dots',
            autoplay:true,
            autoplaySpeed: 2000,

            responsive: [
                {
                    breakpoint: 1601,
                    settings: {
                        slidesToShow: 4,
                    },
                },
                {
                    breakpoint: 1465,
                    settings: {
                        centerMode: true,
                        slidesToShow: 3,
                        centerPadding:"10px",
                        variableWidth: true,
                    },
                },
                {
                    breakpoint: 1331,
                    settings: {
                        centerMode: true,
                        slidesToShow: 3,
                        
                    }
                },
                {
                    breakpoint: 1270,
                    settings: {
                        slidesToShow: 3,
                    }
                },

                {
                    breakpoint: 1080,
                    settings: {
                        slidesToShow: 2,
                       
                    }
                },

                {
                    breakpoint: 775,
                    settings: {
                        slidesToShow: 1,
                       
                    }
                },
            ],
        };

        return (
            <Slider {...defaultSettings} className={`slider ${className}`}>
                {children}
            </Slider>
        );
    }
}

export { CustomSlider };
