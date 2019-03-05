import graphene

import events.schema
import users.schema


class Query(users.schema.Query, events.schema.Query, graphene.ObjectType):
    pass

class Mutation(users.schema.Mutation, events.schema.Mutation, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
