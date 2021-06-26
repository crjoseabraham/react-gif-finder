import { getGifs } from "../../helpers/getGifs";

describe("Pruebas en el getGifs Fetch", () => {
    test("debe de traer 10 elementos", async () => {
        const gifs = await getGifs("Dogs");
        expect(gifs.length).toBe(10);
    });

    // test("debe de traer 10 elementos", async () => {
    //     const gifs = await getGifs("");
    //     expect(gifs.length).toBe(0);
    // });
});
