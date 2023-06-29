import { Outlet, Link } from "react-router-dom";
import React, {Suspense} from 'react'

const SharedLayout = () => {
    return (
        <>
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/Movies">Movies</Link>
                </nav>
            </header>
            <Suspense>
                <Outlet />
            </Suspense>
        </>
    )
}

export default SharedLayout