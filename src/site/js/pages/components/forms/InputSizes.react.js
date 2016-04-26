import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';
import InlineCode from '~/components/InlineCode.react';

import { inputSizesCode } from '~/components/CodeSnippets.js';

export default function InputSizes() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={"Input sizes"} />

                <SectionDescription>
                    Input fields come in four sizes which can be applied with
                    <InlineCode>.input--xl</InlineCode>,
                    <InlineCode>.input--l</InlineCode>,
                    <InlineCode>.input--m</InlineCode> and
                    <InlineCode>.input--s</InlineCode> on the
                    <InlineCode>.input</InlineCode> component itself.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="grid grid--2">
                    <div className="padding-m textAlign-center borderWidth-0 borderRightWidth-1 borderBottomWidth-1 borderStyle-solid borderColor-smoke">
                        <div className="marginTop-xs marginBottom-s">
                            <input
                                className="input input--xl input--default"
                                type="text"
                                placeholder="Placeholder text"
                            />
                        </div>

                        <p className="lineHeight-s fontSize-s fontWeight-3 c-silver">Extra Large Input</p>
                    </div>

                    <div className="padding-m textAlign-center borderWidth-0 borderBottomWidth-1 borderStyle-solid borderColor-smoke">
                        <div className="marginTop-xs marginBottom-s paddingTopBottom-xxs">
                            <input
                                className="input input--l input--default"
                                type="text"
                                placeholder="Placeholder text"
                            />
                        </div>

                        <p className="lineHeight-s fontSize-s fontWeight-3 c-silver">Large Input</p>
                    </div>

                    <div className="padding-m textAlign-center borderWidth-0 borderRightWidth-1 borderStyle-solid borderColor-smoke">
                        <div className="marginTop-xs marginBottom-s paddingTopBottom-xs">
                            <input
                                className="input input--m input--default"
                                type="text"
                                placeholder="Placeholder text"
                            />
                        </div>

                        <p className="lineHeight-s fontSize-s fontWeight-3 c-silver">Medium Input</p>
                    </div>

                    <div className="padding-m textAlign-center">
                        <div className="marginTop-xs marginBottom-s paddingTopBottom-s">
                            <input
                                className="input input--s input--default"
                                type="text"
                                placeholder="Placeholder text"
                            />
                        </div>

                        <p className="lineHeight-s fontSize-s fontWeight-3 c-silver">Small Input</p>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={inputSizesCode} />
        </section>
    );
}
