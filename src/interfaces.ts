
export type TIconClass = 'material-symbols-rounded' | 'material-symbols-outlined'

export type TIconName = 'favorite' | 'close'

export type TFill = 0 | 1

export type TIconLocation = 'insideCard' | 'outsideCard';

export type TColor = 'red' | 'none' | 'black';

export type TCustomBorder = 'border-solid border-2 border-red-600' |
                            'border-solid border-2 border-black-600' |
                            ''
export interface IMethods {
    addUserToFavoriteList?: (user: IUser) => void,
    removeUserFromFavoriteList?: (user: IUser) => void,
    countUserInFavoriteList?: () => number,
}

export interface IRegress {
    page: number
    per_page: number
    total: number
    total_pages: number
    data: IUser[]
    support: ISupport
  }
  
  export interface IUser {
    id: number
    email: string
    first_name: string
    last_name: string
    avatar: string
  }
  
  export interface ISupport {
    url: string
    text: string
  }