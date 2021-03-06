import React from 'react';

import FontSize from '~/pages/design/typography/FontSize.react';
import InlineCode from '~/components/InlineCode.react';
import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { fontSizesCode } from '~/components/CodeSnippets.js';

export default function FontSizes() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Font sizes"} />

                <SectionDescription>
                    The font scale consists of 9 different font sizes. The default
                    size applied to the <InlineCode>body</InlineCode> is Medium.
                </SectionDescription>
            </div>

            <SectionExample>
                <FontSize
                    fontSize="xxxxl"
                    fontDescription="46px &mdash; Extra extra extra extra large"
                />
                <FontSize
                    fontSize="xxxl"
                    fontDescription="38px &mdash; Extra extra extra large"
                />
                <FontSize
                    fontSize="xxl"
                    fontDescription="28px &mdash; Extra extra large"
                />
                <FontSize
                    fontSize="xl"
                    fontDescription="20px &mdash; Extra large"
                />
                <FontSize
                    fontSize="l"
                    fontDescription="18px &mdash; Large"
                />
                <FontSize
                    fontSize="m"
                    fontDescription="16px &mdash; Medium"
                />
                <FontSize
                    fontSize="s"
                    fontDescription="14px &mdash; Small"
                />
                <FontSize
                    fontSize="xs"
                    fontDescription="12px &mdash; Extra small"
                />
                <FontSize
                    fontSize="xxs"
                    fontDescription="10px &mdash; Extra extra small"
                />
            </SectionExample>

            <div style={{ marginTop: '-1px' }}>
                <SectionCode codeType="language-html" code={fontSizesCode} />
            </div>
        </section>
    );
}
