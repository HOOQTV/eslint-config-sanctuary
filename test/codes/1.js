// sanctuary 2

class Foo {

    async print() {

    }

    async spit() {
        await this.print();
    }

    droll() {

    }
}

const foo = new Foo();

function zap() {

}

zap(foo);
