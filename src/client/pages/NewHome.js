import React from 'react';
import styled from 'styled-components';

export const NewHome = () => {
    return (
        <Container>
            <svg
                viewBox='0 0 1000 600'
                xmlns='http://www.w3.org/2000/svg'
                xlink='http://www.w3.org/1999/xlink'
            >
                <defs>
                    <path id='MyPath' d='M 20 40 Q 260 240 400 500' />
                </defs>
                <use xlinkHref='#MyPath' fill='none' stroke='#59fa81' />
                <text fontFamily='Courier New' fontSize='42.5'>
                    <textPath xlinkHref='#MyPath'>
                        Wow such a nice SVG tut
                    </textPath>
                </text>
            </svg>
        </Container>
    );
};

const Container = styled.div``;
