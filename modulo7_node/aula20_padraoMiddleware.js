// Padrão Middleware pattern (chain of responsibility)


const passo1=(ctx,next) => {
    ctx.valor1='mid1'
    next()
}
const passo2=(ctx,next)=>{
    ctx.valor2='midi2'
    next()
}
const passo3 = (ctx)=>{
    ctx.valor3='midi3'
}
const exec =(ctx,...middlewares)=>{
    const execPasso = indice =>{
        middlewares && indice<middlewares.length &&
        middlewares[indice](ctx, ()=>execPasso(indice+1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx,passo1,passo2,passo3)

console.log(ctx)

// podemos tbm trocar a ordem das chamad que sera executado. porem se colocar o  passo3 na frente os demais não seram executados pois não  colocamos o next ().

