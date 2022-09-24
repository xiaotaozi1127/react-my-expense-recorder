import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>My Expenses</div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to='/expenses' className={(navData) => navData.isActive ? classes.active : ''}>
                            All expenses
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/new-expense' className={(navData) => navData.isActive ? classes.active : ''}>
                            Add new expense
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
