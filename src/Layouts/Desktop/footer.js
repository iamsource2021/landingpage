import * as React from "react";
import { MarketingFooter } from './../../ui-components';
import { View, useTheme } from '@aws-amplify/ui-react';

function Footer(props) {
    const { tokens } = useTheme();
    return (
        <View
            height="100%"
            width="100%"
            backgroundColor={tokens.colors.blue[60]}
        >
            <MarketingFooter overrides={
                {
                    MarketingFooter: { width: "100%" },
                    "Rectangle 738": { width: "100%", height: "auto" }
                }
            } />
        </View>
    );
}

export default Footer;