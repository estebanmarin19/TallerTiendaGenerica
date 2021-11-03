const connection=require('../conexion/conexion');
const cnn=connection();
const {render}=require('ejs');
const bcryptjs=require('bcryptjs');
const controller={};


controller.index=(req,res,next)=>{
    res.render('login')
    res.send("Error en Controlador");
}



/*
controller.login=async(req,res,next)=>{  
    const usu =  req.body.usu;  
    const cla = await req.body.cla;
    console.log(usu+cla);
    cnn.query('SELECT * FROM usuarios WHERE nomusu=?',[usu],async(err,results)=>{  
        if(err){
            next(new Error("Error de consulta",err)); 
    
        }
        else if(results!=0 && await(bcryptjs.compare(cla,results[0].clave))){
            idusu=results[0].idusu;
            console.log(idusu)
            
            cnn.query('SELECT * FROM usurol WHERE idusu=?',[idusu],async(err,results)=>{
                rol=results[0].rolid;
                console.log(rol)
                cnn.query('SELECT * FROM datosusu WHERE idusu=?',[idusu],async(err,results)=>{
                    iddat=results[0].iddat;
                    
                    req.session.Login=true; 
                    req.session.iddat=results[0].iddat;
                    idusu=results[0].idusu;
                    req.session.idusu=results[0].idusu;
                    if(rol=="1003"){
                        res.redirect('vadministrador');
                    }
                    else if(rol=="1001"){
                        res.redirect('vcomprador');
                    }
                    else if(rol=="1002"){
                        res.redirect('vvendedor')
                    }
                }) 
            })

        }
       else {
            console.log("Datos incorrectos"); 
            res.redirect('login');
        }
    })
}*/
controller.usuarios=(req,res,next)=>{
    res.render('Usuarios')
    res.send("Error en Controlador");
}
controller.vistaprincipal=(req,res,next)=>{
    res.render('vistaprincipal')
    res.send("Error en Controlador");
}
controller.clientes=(req,res,next)=>{
    res.render('Clientes')
    res.send("Error en Controlador");
}
controller.proveedores=(req,res,next)=>{
    res.render('Proveedores')
    res.send("Error en Controlador");
}
controller.productos=(req,res,next)=>{
    res.render('Productos')
    res.send("Error en Controlador");
}
controller.ventas=(req,res,next)=>{
    res.render('Ventas')
    res.send("Error en Controlador");
}
controller.reportes=(req,res,next)=>{
    res.render('Reportes')
    res.send("Error en Controlador");
}
controller.listadousuarios=(req,res,next)=>{
    res.render('ListaUsuarios')
    res.send("Error en Controlador");
}
controller.listadoclientes=(req,res,next)=>{
    res.render('ListaClientes')
    res.send("Error en Controlador");
}
controller.listadoventas=(req,res,next)=>{
    res.render('ListaVentas')
    res.send("Error en Controlador");
}
controller.cerrar=(req,res,next)=>{
    req.session.destroy(()=>{
        res.redirect('/');
    });
    
    
}








module.exports=controller;



