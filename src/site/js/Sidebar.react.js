import React from 'react';

import classNames from 'classnames';
import Navigation from '~/Navigation.react';

import { IndexLink } from 'react-router';

export default function Sidebar() {
    return (
        <aside className={classNames(
                'sidebar',

                'bg-white',
                'borderColor-smoke',
                'borderRightWidth-1',
                'borderStyle-solid',
                'borderWidth-0',
                'height-100',
                'overflow-auto',
                'posFixTL',
                'width-80',

                'breakPointM-width-30',
                'breakPointL-width-20',
            )}>
            <div className={classNames(
                    'borderBottomWidth-1',
                    'borderColor-smoke',
                    'borderStyle-solid',
                    'borderWidth-0',
                    'display-none',
                    'paddingTopBottom-l',
                    'textAlign-center',
                    'breakPointM-display-block',
                )}>
                <div className="paddingTopBottom-m">
                    <div className="marginBottom-s">
                        <IndexLink to="/">
                            <svg
                                className={classNames(
                                    'link',
                                    'fill-blue',
                                    'fill-marvel--d--hover'
                                )}
                                id="marvel-logo"
                                width={80}
                                height={34}
                                viewBox="0 0 80 34">
                                <path d="M67.93,22c-29.1-2.21-53.16,4.67-58.54,7.22-3,1.36-3.21,3.06-2.78,4C7,33.94,8.43,34.36,10,33.6c11.55-6.12,34.92-11,57.94-9.6A1,1,0,0,0,67.93,22Zm7.21-8.58c-1.22,1.36-3,2.38-3.56,1.87s0-2.12,0-2.12C74.44,11.34,80,6.67,80,3.1c0-3.31-3-4.33-6.17-1.27a22.83,22.83,0,0,0-5.39,9.68c-1.65,1.61-4.26,3.65-6.6,3.65-1.22,0-1.56-.85-1.39-2C62.45,13.13,68,11.6,68,7a2.76,2.76,0,0,0-3-2.72c-2.52,0-5.73,2.55-7.3,6.12A5.1,5.1,0,0,1,56.46,10a17,17,0,0,0,1-2.72c0.35-1.87-.43-3.06-2-2.89-1,.08-2.17.93-2.43,2.89a5.25,5.25,0,0,0,.52,2.89c-0.69,2.12-3.47,4.76-4.43,4.67S49.25,11,50.21,8.2a5.72,5.72,0,0,0,1.22-1.87A1.19,1.19,0,0,0,51,4.8a2.92,2.92,0,0,0-3.65,1.53,16.81,16.81,0,0,0-1,2.12c-0.78.93-2,2.12-2.35,2-0.52-.34,1.22-2.63,1-3.91a2,2,0,0,0-2.17-1.7C41.26,5.06,39.18,8,39.18,8a4.91,4.91,0,0,0,.43-1.7c-0.09-1.1-2.17-1.61-3.21.42a32.07,32.07,0,0,0-1.56,6c-0.43.93-2.17,3.65-3.56,3.74-1.13.08,0.26-4.84,0.43-5.1,0.61-.93,1.39-2.89,1.22-3.74a1.28,1.28,0,0,0-1.65-1.27,2.67,2.67,0,0,0-1.65,1.27,2.15,2.15,0,0,0-2.08-.76C22.93,7.35,20,15.25,20.33,19c0.26,2,1.22,3.23,3,3,2-.25,3.65-3.14,3.65-3.14s0.43,2.38,2.61,2.12a8.25,8.25,0,0,0,4.08-2.8,1.46,1.46,0,0,0-.09.42c-0.35,2,3,1.78,3.3.25,1-7.56,3.56-10.7,4.34-10.7,0.61,0-1.65,3.57-.35,4.93,1,1.19,2.78.25,4.26-1a12.24,12.24,0,0,0-.43,2.89c-0.09,2.12.69,3.82,2.78,3.74,2.78-.08,5.73-3.48,7.64-6.71a4.79,4.79,0,0,0,1.65.68A7.17,7.17,0,0,0,56.55,15c0.17,2.46,1.91,3.4,3.91,3.31,2.35-.08,5.12-1.87,7-3.48a0.31,0.31,0,0,1-.09.25c-0.17,1.19.09,3.4,1.82,3.48,2,0.17,5.47-1.87,7.21-4C77.65,13.64,76.18,12.28,75.14,13.38ZM77,3.19a0.39,0.39,0,0,1,.35.42c0,2.12-5.39,6.63-5.39,6.63S75.48,3.19,77,3.19ZM64,7.6a0.57,0.57,0,0,1,.61.68c0,1.19-1.65,2.12-3.47,2.12C62.11,9,63.24,7.6,64,7.6ZM28,10.92c-0.17,1.27-2.43,7-3.65,7-1.56.08,0.78-8.07,3.3-8C28.14,9.9,28.14,10.24,28,10.92ZM8.43,12.45c1.48,0-1.22,7.56-.87,10.87s4.08,2.38,3.82.42c-0.43-3.23,1.82-13.51,4.08-13.51,1.65,0-1.82,7.05-1.13,11.47,0.43,2.89,4.43,2,4,.17C17.11,16.1,21.2,10.49,20.67,6.42c-0.26-1.7-1.22-2.63-2.35-2.63-3.74,0-6.78,7.47-6.78,7.47S11.9,7,8.86,6.84C4.43,6.58-.09,17.46,0,27.31c0.09,3.14,4.08,2.63,3.82.08C3.56,23,6.17,12.45,8.43,12.45h0Z" />
                            </svg>
                        </IndexLink>
                    </div>
                    <span
                        className={classNames(
                            'textTransform-uppercase',
                            'fontSize-xxs',
                            'c-silver'
                        )}
                        style={{ letterSpacing: 3 }}>Styleguide</span>
                </div>
            </div>

            <div className={classNames(
                    'posPinBL',
                    'width-100',
                    'paddingBottom-l',
                    'textAlign-center'
                )}>
                <div className={classNames(
                        'paddingBottom-s',
                        'inline',
                        'textAlign-center'
                    )}>
                    <div className={classNames(
                            'marginRight-m',
                            'breakPointL-marginRight-l'
                        )}>
                        <a href="https://github.com/marvelapp/styleguide" target="blank">
                            <svg
                                className={classNames(
                                    'fill-smoke--d',
                                    'fill-steel--hover',
                                    'scaleUp--hover',
                                    'cursor-pointer',
                                    'transitionDuration-m',
                                    'transitionTimingFunction-cb--scaleUp'
                                )}
                                width={32}
                                height={32}
                                viewBox="0 0 32 32">
                                <path d="M28.948 25.981c-2.035 2.848-4.663 4.818-7.885 5.912-.375.071-.649.021-.823-.149-.174-.17-.26-.383-.26-.639v-4.495c0-1.378-.361-2.386-1.083-3.025.792-.085 1.503-.213 2.135-.383.632-.17 1.285-.447 1.958-.831.674-.383 1.236-.856 1.687-1.417.451-.561.819-1.307 1.104-2.237.285-.93.427-1.999.427-3.206 0-1.719-.549-3.182-1.646-4.389.514-1.293.458-2.741-.167-4.346-.389-.128-.951-.05-1.688.234-.736.284-1.375.597-1.917.937l-.792.511c-1.292-.369-2.625-.554-4-.554s-2.708.185-4 .554c-.222-.156-.517-.348-.885-.575-.368-.227-.948-.501-1.74-.82-.792-.32-1.389-.415-1.792-.288-.611 1.605-.66 3.054-.146 4.346-1.097 1.207-1.646 2.67-1.646 4.389 0 1.207.142 2.273.427 3.196.285.923.649 1.669 1.094 2.237.444.568 1.003 1.044 1.677 1.427.674.383 1.326.66 1.958.831.632.17 1.344.298 2.135.383-.556.511-.896 1.243-1.021 2.194-.292.142-.604.249-.937.32-.333.071-.729.107-1.188.107-.458 0-.913-.153-1.365-.458-.451-.305-.837-.749-1.156-1.332-.264-.455-.601-.824-1.01-1.108-.41-.284-.753-.455-1.031-.511l-.417-.064c-.292 0-.493.032-.604.096-.111.064-.146.146-.104.245.042.099.104.199.188.298.083.099.174.185.271.256l.146.107c.306.142.608.412.906.81.299.398.517.76.656 1.087l.208.49c.181.54.486.976.917 1.31.431.334.896.547 1.396.639.5.092.983.142 1.448.149.465.007.851-.018 1.156-.075l.479-.085c0 .54.003 1.172.01 1.896l.01 1.15c0 .256-.09.469-.271.639-.181.17-.458.22-.833.149-3.222-1.094-5.851-3.064-7.885-5.912-2.035-2.848-3.052-6.054-3.052-9.619 0-2.969.715-5.706 2.146-8.213 1.431-2.507 3.372-4.492 5.823-5.955 2.451-1.463 5.128-2.194 8.031-2.194 2.903 0 5.58.731 8.031 2.194 2.451 1.463 4.392 3.448 5.823 5.955s2.146 5.245 2.146 8.213c0 3.565-1.017 6.771-3.052 9.619z" />
                            </svg>
                        </a>
                    </div>

                    <div className={classNames(
                            'marginRight-m',
                            'breakPointL-marginRight-l'
                        )}>
                        <a href="https://dribbble.com/marvelapp" target="blank">
                            <svg
                                className={classNames(
                                    'fill-smoke--d',
                                    'fill-dribbble--hover',
                                    'scaleUp--hover',
                                    'cursor-pointer',
                                    'transitionDuration-m',
                                    'transitionTimingFunction-cb--scaleUp'
                                )}
                                width={32}
                                height={32}
                                viewBox="0 0 32 32">
                                <path d="M16 0c-4.417 0-8.187 1.562-11.313 4.688-3.125 3.125-4.688 6.896-4.688 11.313 0 4.417 1.562 8.187 4.688 11.313 3.125 3.125 6.896 4.688 11.313 4.688 4.417 0 8.187-1.562 11.313-4.688 3.125-3.125 4.688-6.896 4.688-11.313 0-4.417-1.562-8.187-4.688-11.313-3.125-3.125-6.896-4.688-11.313-4.688zm0 2.375c3.458 0 6.479 1.146 9.063 3.438-.208.292-.5.635-.875 1.031-.375.396-1.156 1.01-2.344 1.844-1.188.833-2.51 1.521-3.969 2.063-1.542-2.875-3.229-5.542-5.063-8 1.042-.25 2.104-.375 3.188-.375zm-5.813 1.25c1.833 2.5 3.521 5.146 5.063 7.938-4.375 1.167-8.583 1.729-12.625 1.688.458-2.125 1.354-4.031 2.688-5.719 1.333-1.688 2.958-2.99 4.875-3.906zm-7.875 12.375v-.375c4.667.083 9.354-.562 14.063-1.938.417.75.792 1.521 1.125 2.313l-.563.125c-1.625.542-3.156 1.292-4.594 2.25-1.438.958-2.625 1.958-3.563 3-.938 1.042-1.604 1.833-2 2.375-.396.542-.698 1.021-.906 1.438-2.375-2.625-3.563-5.687-3.563-9.188zm13.688 13.688c-3.125 0-5.917-.958-8.375-2.875.125-.25.281-.531.469-.844.188-.313.583-.844 1.187-1.594.604-.75 1.271-1.448 2-2.094.729-.646 1.729-1.354 3-2.125 1.271-.771 2.615-1.406 4.031-1.906h.125c1.375 3.583 2.333 7.042 2.875 10.375-1.667.708-3.437 1.063-5.313 1.063zm7.625-2.313c-.5-3.042-1.375-6.292-2.625-9.75 2.917-.5 5.75-.313 8.5.563-.625 3.875-2.583 6.937-5.875 9.188zm-3.5-11.938c-.083-.25-.167-.479-.25-.688-.292-.667-.604-1.333-.938-2 1.5-.625 2.885-1.375 4.156-2.25s2.104-1.531 2.5-1.969c.396-.438.719-.823.969-1.156 2.042 2.5 3.083 5.333 3.125 8.5-3.25-.667-6.437-.813-9.563-.438z" />
                            </svg>
                        </a>
                    </div>

                    <div>
                        <a href="https://twitter.com/marvelapp" target="blank">
                            <svg
                                className={classNames(
                                    'fill-smoke--d',
                                    'fill-twitter--hover',
                                    'scaleUp--hover',
                                    'cursor-pointer',
                                    'transitionDuration-m',
                                    'transitionTimingFunction-cb--scaleUp'
                                )}
                                width={32}
                                height={32}
                                viewBox="0 0 32 32">
                                <path d="M16 0c-4.417 0-8.187 1.562-11.313 4.688-3.125 3.125-4.688 6.896-4.688 11.313 0 4.417 1.562 8.187 4.688 11.313 3.125 3.125 6.896 4.688 11.313 4.688 4.417 0 8.187-1.562 11.313-4.688 3.125-3.125 4.688-6.896 4.688-11.313 0-4.417-1.562-8.187-4.688-11.313-3.125-3.125-6.896-4.688-11.313-4.688zm7.938 12.438c.042.167.063.333.063.5 0 2.833-1.021 5.406-3.063 7.719-2.042 2.313-4.771 3.469-8.188 3.469-2.167 0-4.167-.583-6-1.75.292.042.604.063.938.063 1.792 0 3.417-.562 4.875-1.688-.875-.042-1.646-.312-2.313-.813-.667-.5-1.125-1.146-1.375-1.938.25.042.5.063.75.063.333 0 .688-.042 1.063-.125-.917-.208-1.677-.667-2.281-1.375-.604-.708-.906-1.542-.906-2.5v-.063c.542.333 1.146.5 1.813.5-1.208-.792-1.813-1.875-1.813-3.25 0-.708.188-1.375.563-2 2.083 2.583 4.792 3.958 8.125 4.125-.083-.292-.125-.604-.125-.938 0-1.083.385-2.01 1.156-2.781.771-.771 1.698-1.156 2.781-1.156 1.167 0 2.125.417 2.875 1.25.917-.167 1.75-.479 2.5-.938-.292.958-.854 1.687-1.688 2.188.75-.083 1.5-.292 2.25-.625-.542.792-1.208 1.479-2 2.063z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <Navigation />
        </aside>
    );
}
