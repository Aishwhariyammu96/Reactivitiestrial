using Microsoft.AspNetCore.Mvc;
using MediatR;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using Application.Activities;
using System;
using Application;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActivitiesController : ControllerBase
    {
        private readonly IMediator _mediator;
        public ActivitiesController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<Activity>>> List()
        {
            return await _mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<Activity>> Details(Guid id)
        {
            return await _mediator.Send(new Details.Query{Id = id });
        }
    }
}