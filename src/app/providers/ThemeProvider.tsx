import {ReactNode} from 'react';

const ThemeProvider = ({children}: {children: ReactNode}) => {
    return (
        <div className="theme-provider">
            {children}
        </div>
    );
};

export default ThemeProvider;