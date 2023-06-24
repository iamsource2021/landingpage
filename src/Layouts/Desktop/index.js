import { Flex } from '@aws-amplify/ui-react';

import Header from './header';
import Footer from './footer';
import Content from './content';

function Desktop(props) {


    return (
        <Flex
            direction="column"
            justifyContent="flex-start"
            alignItems="stretch"
            alignContent="flex-start"
            wrap="nowrap"
            gap="0"
        >
            <Header />
            <Content />
            <Footer />
        </Flex>
    );
}

export default Desktop;