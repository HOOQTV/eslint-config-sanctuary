// sanctuary 1
const foo = 1,
    bar = 2;

function boom() {

}

function zap(bang) {
    switch (bang) {
        case 'pow':
            boom();
            break;
        default:
            boom();
            break;
    }
}

zap(foo, bar);
