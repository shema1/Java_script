const sortContacts = contacts => {
    const result = contacts
        .sort((a, b) => {
            return a.name.localeCompare(b.name)
        });

    return result;
}