

//Menerapkan ISP dengan memisahkan interface berdasarkan peran
//Setiap interface hanya memiliki method yang spesifik untuk tugasnya
//IUI untuk frontend, IDatabase untuk backend, IDesign untuk desainer
class IUI {
    createUI() { }
}

class IDatabase {
    createDb() { }
}

class IDesign {
    createDesign() { }
}

//Menerapkan SRP: Kelas ini fokus pada fungsi dasar developer
//Menerapkan DIP: Menggunakan dependency injection melalui interface
//Memiliki method umum: deployWebsite() dan testFunctionality()
class Developer {
    constructor(uiInterface, dbInterface, designInterface) {
        this.uiInterface = uiInterface;
        this.dbInterface = dbInterface;
        this.designInterface = designInterface;
    }

    deployWebsite() {
        console.log("Deploying website...");
    }

    testFunctionality() {
        console.log("Testing website functionality...");
    }
}

// Kelas turunan FrontendDeveloper yang mengimplementasikan interface UI
//Mewarisi class Developer
//Hanya menerima uiInterface (null untuk interface lain)
//Menambah method khusus frontend: addAnimation()
class FrontendDeveloper extends Developer {
    constructor(uiInterface) {
        super(uiInterface, null, null);
    }

    createUI() {
        this.uiInterface.createUI();
    }

    addAnimation() {
        console.log("Adding animations to the UI...");
    }
}

// Kelas turunan BackendDeveloper yang mengimplementasikan interface Database
//Mewarisi class Developer
//Fokus pada database interface
//Menambah method khusus backend: manageAPI()
class BackendDeveloper extends Developer {
    constructor(dbInterface) {
        super(null, dbInterface, null);
    }

    createDb() {
        this.dbInterface.createDb();
    }

    manageAPI() {
        console.log("Managing API for the backend...");
    }
}

// Kelas tambahan untuk UI/UX Designer yang mengimplementasikan interface Design
//Mewarisi class Developer
//Fokus pada design interface
class UIDesigner extends Developer {
    constructor(designInterface) {
        super(null, null, designInterface);
    }

    createDesign() {
        this.designInterface.createDesign();
    }
}

// Implementasi interface yang spesifik untuk tugasnya
//Implementasi konkret dari setiap interface
//Mendefinisikan perilaku spesifik untuk setiap method
class UIImplementation extends IUI {
    createUI() {
        console.log("Creating user interface...");
    }
}

class DbImplementation extends IDatabase {
    createDb() {
        console.log("Setting up database...");
    }
}

class DesignImplementation extends IDesign {
    createDesign() {
        console.log("Creating user interface design...");
    }
}

// Polimorfisme: Menjalankan metode yang berbeda berdasarkan instance kelas turunan
//Function develop mendemonstrasikan polimorfisme
//Dapat menerima berbagai jenis developer
//Setiap jenis developer dapat menggunakan method dengan caranya sendiri
function develop(developer) {
    developer.deployWebsite();
    developer.testFunctionality();
}

// Contoh penggunaan
const frontendDev = new FrontendDeveloper(new UIImplementation());
frontendDev.createUI();
frontendDev.addAnimation();
develop(frontendDev);

const backendDev = new BackendDeveloper(new DbImplementation());
backendDev.createDb();
backendDev.manageAPI();
develop(backendDev);

const uiDesigner = new UIDesigner(new DesignImplementation());
uiDesigner.createDesign();
develop(uiDesigner);
