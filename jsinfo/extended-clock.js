class ExtendedClock extends Clock{
 constructor(options){
   super(options);
   if (!options.precision){
     options.precision = 1000;
   }
   console.log(options.precision)
 }
}
