import { Theme } from '@mui/material/styles';

export interface Preferences {
    [index: string]: any;
}

export interface Themes {
    [index: string]: Theme;
}

export interface Environment {
    themes: Themes,
    preferences: Preferences
}