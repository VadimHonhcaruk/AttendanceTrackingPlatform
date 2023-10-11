import React from 'react';
import { HeaderAdd } from '../Header/HeaderAdd';
import c from './List.module.css';


export const List = () => {
    return (
        <div>
            <HeaderAdd title='Student List' />
            <div className={c.listCont}>
                <div className={c.main}>
                    <table className={c.table}>
                        <col />
                        <col />
                        <col />
                        <col />
                        <tr>
                            <th class="sorting_disabled" >FIRST</th>
                            <th class="sorting_disabled" >LAST</th>
                            <th class="sorting_disabled" >EMAIL</th>
                            <th class="sorting_disabled" >MOBILE PHONE</th>
                        </tr>
                        {

                        }
                    </table>
                </div>
            </div>
        </div>
    )
}
