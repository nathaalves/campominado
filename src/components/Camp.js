import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Cell from './Cell';

export default function Camp () {

    const [campWidth] = useState(80)
    const [campHight] = useState(40)
    const [numberOfMines] = useState(3100)
    const [camp, setCamp] = useState([])

    useEffect( function fillCamp () {
        const mat = [];
        let isMine = true;
        for (let i = 0; i < campHight; i++) {
            for (let j = 0; j < campWidth; j++) {

                if (mat.length === numberOfMines) {
                    isMine = false;
                }

                mat.push({
                    isMine: isMine,
                    number: 0
                })
            }
        }

        function func() {  
            return 0.5 - Math.random();
        }

        for (let i = 0; i < 100; i++) {
            mat.sort (func)
        }

        for (let i = 0; i < mat.length; i++) {
            let count = 0;
            if (!mat[i].isMine) {

                if (i - campWidth - 1 >= 0 && (i - campWidth) % campWidth !== 0 && mat[i - campWidth - 1].isMine) {count += 1}
                if (i - campWidth >= 0 && mat[i - campWidth].isMine) {count += 1}
                if (i - campWidth + 1 > 0 && (i - campWidth + 1) % campWidth !== 0 && mat[i - campWidth + 1].isMine) {count += 1}
                if ((i % campWidth !== 0 || i !== 0) && mat[i-1].isMine) {count += 1}
                if ((i + 1) % campWidth !== 0 && mat[i + 1].isMine) {count += 1}
                if (i + campWidth -1 < mat.length && (i + campWidth) % campWidth !== 0 && mat[i + campWidth -1].isMine) {count += 1}
                if (i + campWidth < mat.length && mat[i + campWidth].isMine) {count += 1}
                if (i + campWidth + 1 < mat.length && (i + campWidth + 1) % campWidth !== 0 && mat[i + campWidth + 1].isMine) {count += 1}
                
                mat[i].number = count;
            }   
        }

        setCamp(mat);

    }, [campHight, campWidth, numberOfMines]); 

    return (
        <Container>
            {camp.map( (cell, index) => {
                  
                let color1 = null;
                let color2 = null;
                if (Math.floor(index / campWidth) % 2 === 0) {
                    color1 = '#8ecc39';
                    color2 = '#A7D948';
                } else {
                    color1 = '#A7D948';
                    color2 = '#8ecc39';
                }
                return <Cell key={index} color={index % 2 === 0 ? color1 : color2} >{ cell.isMine ? '*' : cell.number }</Cell>
            })}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;

    width: 1600px;
`;