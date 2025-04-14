(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, flaged: false },
        { id: 2, flaged: false },
        { id: 3, flaged: true },
        { id: 4, flaged: false },
        { id: 5, flaged: false },
        { id: 7, flaged: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const filesToDelete = filesToEvaluate.map( file => file.flaged );

    // Bad names
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Good names
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    const today = new Date();
    
    // días transcurridos - elapsed time in days
    const elapsedTimeInDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const numberOfFilesInDirectory = 33;
    
    // primer nombre - first name
    const firstName = 'Fernando';
    
    // primer apellido - last name
    const lastName = 'Herrera';

    // días desde la última modificación - days since modification
    const daysSinceLastModification = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const maxClassesPerStudent = 6;


})();



