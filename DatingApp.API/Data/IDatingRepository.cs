namespace DatingApp.API.Data
{
    public interface IDatingRepository
    {
         // Using generic type
         // Add the type of T [T is User or Photo], take T entity as param
         // an constrain this method to just classes where T is type of Class
         void Add<T>(T entity) where T: class;
    }
}