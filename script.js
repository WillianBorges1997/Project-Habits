const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
    run: ["01-01", "01-02", "01-04", "01-05", "01-06"],
    dog: ["01-03"],
    book: ["01-02"],
    game: ["01-01", "01-02", "01-04"],
}

nlwSetup.setData(data)
nlwSetup.load()