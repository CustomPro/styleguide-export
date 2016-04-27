import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
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

            <div className="grid grid--1 breakPointL-grid--2">
                <div
                    className="padding-m textAlign-center boxShadow-smoke borderRadiusTop-m breakPointL-borderRadiusTopLeft-m"
                    style={{ marginTop: '-1px', marginRight: '-1px' }}>
                    <div className="marginTop-xs marginBottom-s">
                        <input
                            className="input input--xl input--default"
                            type="text"
                            placeholder="Placeholder text"
                        />
                    </div>

                    <p className="lineHeight-s fontSize-s fontWeight-3 c-silver">Extra Large Input</p>
                </div>

                <div
                    className="padding-m textAlign-center boxShadow-smoke borderRadius-0 breakPointL-borderRadiusTopRight-m"
                    style={{ marginTop: '-1px' }}>
                    <div className="marginTop-xs marginBottom-s paddingTopBottom-xxs">
                        <input
                            className="input input--l input--default"
                            type="text"
                            placeholder="Placeholder text"
                        />
                    </div>

                    <p className="lineHeight-s fontSize-s fontWeight-3 c-silver">Large Input</p>
                </div>

                <div
                    className="padding-m textAlign-center boxShadow-smoke"
                    style={{ marginTop: '-1px', marginRight: '-1px' }}>
                    <div className="marginTop-xs marginBottom-s paddingTopBottom-xs">
                        <input
                            className="input input--m input--default"
                            type="text"
                            placeholder="Placeholder text"
                        />
                    </div>

                    <p className="lineHeight-s fontSize-s fontWeight-3 c-silver">Medium Input</p>
                </div>

                <div
                    className="padding-m textAlign-center boxShadow-smoke"
                    style={{ marginTop: '-1px' }}>
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

            <div style={{ marginRight: '1px' }}>
                <SectionCode code={inputSizesCode} />
            </div>
        </section>
    );
}
