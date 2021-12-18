export interface Post {
    author: string;
    avatar: string;
    createdAt: Date;
    contentType: PostType;
    content: string;
}

export enum PostType {
    IMAGE = "IMAGE",
    TEXT = "TEXT",
    VIDEO = "VIDEO"
}