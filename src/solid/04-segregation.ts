

// * The Interface Segregation Principle (ISP) 
// * states that no client should be forced to depend on methods it does not use. 
// * This means that interfaces should be small and specific to the needs of the clients that use them. In other words, 
// * it's better to have many small interfaces than a few large ones.
// * This principle is important because it helps to reduce the complexity of the code and makes it easier to understand and maintain. 
// * It also helps to avoid the "fat interface" problem, where a single interface has too many methods, 
// * making it difficult to implement and use.
interface Bird {
    eat(): void;
}

interface FlyingBird {
    fly(): void;
}

interface RunningBird {
    run(): void;
}

interface SwimmingBird {
    swin(): void;
}


class Tucan implements Bird, FlyingBird {

    public fly() {}
    public eat() {}
    public swin() {}
}

class Humminbird implements Bird, FlyingBird {
    public fly() {}
    public eat() {}
    public swin() {}
}

class Ostrich implements Bird, RunningBird {
    public eat() {}
    public run() {}
    public swin() {}
}

class Penguin implements Bird, SwimmingBird {
    public eat() {}
    public swin() {}
}