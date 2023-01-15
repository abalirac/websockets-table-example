export abstract class SeriesService {
    private static apiURL = 'http://localhost:3001'

    public static async getSeries():Promise<Series[]> {
        const result = await fetch(`${SeriesService.apiURL}/series`);
        return result.json();
    }

}