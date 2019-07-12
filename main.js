class test
{
   constructor(element, childElement, button) {
      this.element = element;
      this.childElement = childElement;
      this.button = button;
      this.answer();
   }
   answer()
   {
      this.button[0].addEventListener('click', function() {
         this.triggerEvent(0);
      });
   }

   hide(item)
   {
      this.childElement[item].style.display = "none";
   }

   triggerEvent(item)
   {
      for(let i=0;i<6;i++){
         this.hide(i);
      }
      this.show(item);
   }
   defaultItem()
   {
      this.childElement[0].style.display = "block";
   }
   show(item)
   {
      this.childElement[item].style.display = "block";
   }
}
document.addEventListener('DOMContentLoaded', init);

function init()
{
   const bikeInformation = document.querySelector("#bike-information");
   const childBike = bikeInformation.children;
   const button = document.querySelectorAll(".show-more");
   new test(bikeInformation, childBike, button);
}
