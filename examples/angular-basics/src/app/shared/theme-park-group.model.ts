import { ThemePark } from './theme-park.model';

export interface ThemeParkGroup {
    id: string;
    company: string;
    location: string;
    parks: ThemePark[];
}
