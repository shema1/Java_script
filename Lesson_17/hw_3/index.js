const bind = (func, context) => {
    return func.apply(context, arguments);
};

export { bind };