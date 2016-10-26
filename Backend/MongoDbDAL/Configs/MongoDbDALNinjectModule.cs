﻿using AutoMapper;
using JetBrains.Annotations;
using MongoDB.Driver;
using Ninject.Modules;
using UniversityInformationSystem.DALInterfaces.Helpers;
using UniversityInformationSystem.DALInterfaces.Repositories;
using UniversityInformationSystem.MongoDbDAL.Helpers;
using UniversityInformationSystem.MongoDbDAL.Repositories;

namespace UniversityInformationSystem.MongoDbDAL.Configs
{
    [UsedImplicitly]
    public class MongoDbDALNinjectModule : NinjectModule
    {
        public override void Load()
        {
            // Helpers
            Bind<IMapper>().ToConstant(AutoMapperConfiguration.GetAutoMapperConfiguration()).InSingletonScope();
            Bind<MongoDatabase>().ToConstant(ConnectionManager.Instance.Database).InSingletonScope();
            Bind<IInitializeDB>().To<InitializeDB>();

            // Repositories
            Bind<ITabletsRepository>().To<TabletsRepository>();
        }
    }
}