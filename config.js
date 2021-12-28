import { s } from "hastscript";

export const extendedTypes = {
    answer: {
        keyword: 'answer',
        icon: s('svg', {xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24"},[
            s('title', 'SVG Caution Icon'),
            s('path', {fill: "currentColor", d: "M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"})
        ])
    },
    caution: {
        keyword: 'caution',
        icon: s('svg', {xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24"},[
            s('title', 'SVG Caution Icon'),
            s('path', {fill: "currentColor", d: "M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z"})
        ])
    },
    important: {
        keyword: 'important',
        icon: s('svg', {xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24"},[
            s('title', 'SVG Important Icon'),
            s('path', {fill: "currentColor", d: "M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"})
        ])
    },
    note: {
        keyword: 'note',
        icon: s('svg', {xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24"},[
            s('title', 'SVG Important Icon'),
            s('path', {fill: "currentColor", d: "M21 10V9L15 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.9 21 5 21H11V19.13L19.39 10.74C19.83 10.3 20.39 10.06 21 10M14 4.5L19.5 10H14V4.5M22.85 14.19L21.87 15.17L19.83 13.13L20.81 12.15C21 11.95 21.33 11.95 21.53 12.15L22.85 13.47C23.05 13.67 23.05 14 22.85 14.19M19.13 13.83L21.17 15.87L15.04 22H13V19.96L19.13 13.83Z"})
        ])
    },
    question: {
        keyword: 'question',
        icon: s('svg', {xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24"},[
            s('title', 'SVG Question Icon'),
            s('path', {fill: "currentColor", d: "M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"})
        ])
    },
    quote: {
        keyword: 'quote',
        icon: s('svg', {xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24"},[
            s('title', 'SVG Quote Icon'),
            s('path', {fill: "currentColor", d: "M20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H8V21C8 21.6 8.4 22 9 22H9.5C9.7 22 10 21.9 10.2 21.7L13.9 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2M11 13H7V8.8L8.3 6H10.3L8.9 9H11V13M17 13H13V8.8L14.3 6H16.3L14.9 9H17V13Z"})
        ])
    },
    success: {
        keyword: 'success',
        icon: s('svg', {xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24"},[
            s('title', 'SVG Quote Icon'),
            s('path', {fill: "currentColor", d: "M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"})
        ])
    },
    tip: {
        keyword: 'tip',
        icon: s('svg', {xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24"},[
            s('title', 'SVG Quote Icon'),
            s('path', {fill: "currentColor", d: "M12,2A7,7 0 0,0 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9A7,7 0 0,0 12,2M9,21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9V21Z"})
        ])
    },
    warning: {
        keyword: 'warning',
        icon: s('svg', {xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24"},[
            s('title', 'SVG Quote Icon'),
            s('path', {fill: "currentColor", d: "M13 13H11V7H13M11 15H13V17H11M15.73 3H8.27L3 8.27V15.73L8.27 21H15.73L21 15.73V8.27L15.73 3Z"})
        ])
    }
}