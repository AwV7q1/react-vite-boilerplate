import {ReactNode} from "react";
import {ReactQueryProvider} from "./ReactQueryProvider";
import SuspenseBoundary from "./SuspenseBoundary";
import ThemeProvider from "./ThemeProvider";


export const AppProvider = ({children}: { children: ReactNode }) => {
    return (
        <ReactQueryProvider>
            <ThemeProvider>
                <SuspenseBoundary>
                    {children}
                </SuspenseBoundary>
            </ThemeProvider>
        </ReactQueryProvider>
    );
};

