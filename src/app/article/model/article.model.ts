

export class ArticleModel {
    public id: string;
    public title: string;
    public is_top: number = 0;
    public abstract: string;
    public pics: string;
    public praise: number;
    public view_count: number;
    public is_original: boolean = true;
    public created_at: string;
}