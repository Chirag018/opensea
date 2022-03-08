import React from 'react'
import Categories from './Categories'
import CreateSell from './CreateSell'
import Help from './Help'
import NotableDrops from './NotableDrops'
import Resource from './Resource'
import Sponsors from './Sponsors'
import Trending from './Trending'

const Main = () => {
    return (
        <div>
            <CreateSell />
            <NotableDrops />
            <Sponsors />
            <Trending />
            <Categories />
            <Help />
            <Resource />
        </div>
    )
}

export default Main