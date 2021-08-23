import { css } from 'styled-components'

export enum Colors {
    White = '#ffffff',

    Blue = '#047bfe',
    LightBlue = '#a0cdff',
    DarkBlue = '#123e6d',

    LightGreen = '#b5dab6',
    DarkGreen = '#185425',

    LightRed = '#f5bebe',
    DarkRed = '#541818',

    Gray = '#eeeeee',
    MainBlack = '#242C2D',
    Black60 = 'rgba(0, 0, 0, 0.6)',
    Black50 = 'rgba(0, 0, 0, 0.5)',
    Black25 = 'rgba(0, 0, 0, 0.25)',
    Black20 = 'rgba(0, 0, 0, 0.20)',

    // ======================
    Green = '#83CC70',
    Red = '#CC7070',
    Yellow = '#efd160',
}

export const Currency = (currency: string) => css`
    &::after {
        content: '${currency}';
    }
`

export const PageTheme = css`
    height: calc(100% - 70px);
`
