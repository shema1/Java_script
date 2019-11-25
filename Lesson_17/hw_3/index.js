const bind = (func, context) => {
    let args = [].slice.call(arguments, 2)
    return function() {
        let test = [].slice.call(arguments)
        return func.apply(context, args.concat(test))
    }
};

export { bind };