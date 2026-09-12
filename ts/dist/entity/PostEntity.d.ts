import { EchofmEntityBase } from '../EchofmEntityBase';
import type { EchofmSDK } from '../EchofmSDK';
import type { Control } from '../types';
import type { Post, PostLoadMatch } from '../EchofmTypes';
declare class PostEntity extends EchofmEntityBase<Post> {
    constructor(client: EchofmSDK, entopts: any);
    make(this: PostEntity): PostEntity;
    load(this: any, reqmatch?: PostLoadMatch, ctrl?: Control): Promise<PostEntity>;
}
export { PostEntity };
