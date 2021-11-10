import Dexie from 'dexie';

interface OneContact {
    id?: number,
    firstName: string,
    lastName: string,
    email: string,
    country?: string
};

class AddressBookDatabase extends Dexie {
    contacts: Dexie.Table<OneContact>

    constructor() {
        super("AddressBookDatabase")
        this.version(1).stores({
            contacts: "++id, lastName, firstName, email, country"
        });
        this.contacts = this.table("contacts")
    };
};

export var db = new AddressBookDatabase();