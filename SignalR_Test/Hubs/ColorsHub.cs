using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace SignalR_Test.Hubs
{
    public class ColorsHub : Hub
    {
        
        public Task GetColorToOthers(string color)
        {
            return Clients.Others.SendAsync("ReceiveColor", color);
        }

    }
}