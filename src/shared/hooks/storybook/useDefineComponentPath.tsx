import React from 'react';
import {CopyPathButton} from "@shared/components/ui/CopyPathButton";

export const defineComponentPath = (path: string, layout: 'centered' | 'fullscreen' | 'padded' = 'centered') => {
    return {
        layout,
        docs: {
            description: {
                component: (
                    <>
                        <p>📄 <code>{path}</code></p>
                        <CopyPathButton path={path} />
                    </>
                ),
            },
        },
    };
};
