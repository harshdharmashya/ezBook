import React, { useState } from 'react'

export default function AddtoCart({ cart }) {

    return (
        <><table>
            <tr>
                <td>Name</td>
                <td>price</td>
                <td>Quanitity</td>
                <td>Action</td>
            </tr>
        </table>
            {
                cart.map((dataB, i) => {
                    <tr key={i}>
                        <td>{dataB.name}</td>
                        <td>price</td>
                        <td>Quanitity</td>
                        <td>Action</td>
                    </tr>
                })
            }

        </>
    )
}
