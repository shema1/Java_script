const sortContacts = (contacts, param) => {
    if (!Array.isArray(contacts)) {
        return null;
    }
    const result = contacts;
    if (param || param === undefined) {
        result.sort((a, b) => {
            return a.name.localeCompare(b.name)
        });
    } else {
        result.sort((a, b) => {
            return b.name.localeCompare(a.name)
        });
    }


    return result;
}