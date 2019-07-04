import React, { useState } from "react";
import { MDXProvider } from '@mdx-js/react';
import { H1, H2, Text, Pre, Code } from '../components';

export default ({children}) => {
    const [ components ] = useState({
        h1: H1,
        h2: H2,
        p: Text,
        code: Pre,
        inlineCode: Code
    });

    return (
        <MDXProvider components={{components}}>
            {children}
        </MDXProvider>
    )
}